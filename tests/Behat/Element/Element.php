<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Element;

use ArrayAccess;
use Behat\Mink\Driver\DriverInterface;
use Behat\Mink\Element\DocumentElement;
use Behat\Mink\Element\NodeElement;
use Behat\Mink\Exception\ElementNotFoundException;
use Behat\Mink\Selector\SelectorsHandler;
use Behat\Mink\Session;

abstract class Element
{
    private ?DocumentElement $document = null;

    public function __construct(
        private Session $session,
        private ArrayAccess $parameters,
    ) {
    }

    protected function getParameter(string $name): NodeElement
    {
        return $this->parameters[$name] ?? null;
    }

    protected function getDefinedElements(): array
    {
        return [];
    }

    /**
     * @throws ElementNotFoundException
     */
    protected function getElement(string $name, array $parameters = []): NodeElement
    {
        $element = $this->createElement($name, $parameters);

        if (!$this->getDocument()->has('xpath', $element->getXpath())) {
            throw new ElementNotFoundException(
                $this->getSession(),
                sprintf('Element named "%s" with parameters %s', $name, implode(', ', $parameters)),
                'xpath',
                $element->getXpath(),
            );
        }

        return $element;
    }

    protected function hasElement(string $name, array $parameters = []): bool
    {
        return $this->getDocument()->has('xpath', $this->createElement($name, $parameters)->getXpath());
    }

    protected function getSession(): Session
    {
        return $this->session;
    }

    protected function getDriver(): DriverInterface
    {
        return $this->session->getDriver();
    }

    protected function getDocument(): DocumentElement
    {
        if (null === $this->document) {
            $this->document = new DocumentElement($this->session);
        }

        return $this->document;
    }

    private function createElement(string $name, array $parameters = []): NodeElement
    {
        $definedElements = $this->getDefinedElements();

        if (!isset($definedElements[$name])) {
            throw new \InvalidArgumentException(sprintf(
                'Could not find a defined element with name "%s". The defined ones are: %s.',
                $name,
                implode(', ', array_keys($definedElements)),
            ));
        }

        $elementSelector = $this->resolveParameters($name, $parameters, $definedElements);

        return new NodeElement(
            $this->getSelectorAsXpath($elementSelector, $this->session->getSelectorsHandler()),
            $this->session,
        );
    }

    private function getSelectorAsXpath($selector, SelectorsHandler $selectorsHandler): string
    {
        $selectorType = is_array($selector) ? key($selector) : 'css';
        $locator = is_array($selector) ? $selector[$selectorType] : $selector;

        return $selectorsHandler->selectorToXpath($selectorType, $locator);
    }

    private function resolveParameters(string $name, array $parameters, array $definedElements): string
    {
        if (!is_array($definedElements[$name])) {
            return strtr($definedElements[$name], $parameters);
        }

        array_map(
            static function ($definedElement) use ($parameters): string {
                return strtr($definedElement, $parameters);
            },
            $definedElements[$name],
        );

        return $definedElements[$name];
    }
}
