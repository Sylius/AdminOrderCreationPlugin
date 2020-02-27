<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Doctrine\ORM;

use Doctrine\ORM\EntityManager;

trait ProductVariantRepositoryTrait
{
    /**
     * @return EntityManager
     */
    abstract protected function getEntityManager();

    public function findByPhraseAndChannelCode(string $phrase, string $channelCode, string $locale): array
    {
        $expr = $this->getEntityManager()->getExpressionBuilder();

        return $this->createQueryBuilder('o')
            ->innerJoin('o.translations', 'translation', 'WITH', 'translation.locale = :locale')
            ->innerJoin('o.product', 'p')
            ->innerJoin('p.channels', 'c')
            ->andWhere('c.code = :channel')
            ->andWhere($expr->orX('translation.name LIKE :phrase', 'o.code LIKE :phrase'))
            ->setParameter('channel', $channelCode)
            ->setParameter('phrase', '%' . $phrase . '%')
            ->setParameter('locale', $locale)
            ->getQuery()
            ->getResult()
        ;
    }
}
