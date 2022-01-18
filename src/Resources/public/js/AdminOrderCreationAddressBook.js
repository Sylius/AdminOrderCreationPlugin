import 'semantic-ui-css/components/dropdown';
import 'semantic-ui-css/components/transition';
import $ from 'jquery';

const parseKey = function parseKey(key) {
    return key.replace(/(_\w)/g, words => words[1].toUpperCase());
};


$.fn.extend({
    addressBook() {
        const element = this;
        const select = element.parents('.js-address-container').prev().find('> *:first-child');

        const findByName = function findByName(name) {
            return element.find(`[name*="[${parseKey(name)}]"]`);
        };

        select.dropdown({
            forceSelection: false,

            onChange(name, text, choice) {
                const { provinceCode, provinceName } = choice.data();
                const provinceContainer = select.parent().find('.province-container').get(0);

                element.find('input:not([type="radio"]):not([type="checkbox"]), select').each((index, input) => {
                    $(input).val('');
                });

                Object.entries(choice.data()).forEach(([property, value]) => {
                    const field = findByName(property);

                    if (property.indexOf('countryCode') !== -1) {
                        field.val(value).change();

                        const exists = setInterval(() => {
                            const provinceCodeField = findByName('provinceCode');
                            const provinceNameField = findByName('provinceName');

                            const provinceIsLoading = $(provinceContainer).attr('data-loading');

                            if (!(typeof provinceIsLoading !== 'undefinded' && provinceIsLoading !== false)) {
                                if (provinceCodeField.length !== 0 && (provinceCode !== '' || provinceCode != undefined)) {
                                    provinceCodeField.val(provinceCode);

                                    clearInterval(exists);
                                } else if (provinceNameField.length !== 0 && (provinceName !== '' || provinceName != undefined)) {
                                    provinceNameField.val(provinceName);

                                    clearInterval(exists);
                                }
                            }
                        }, 100);
                    } else if (field.is('[type="radio"]') || field.is('[type="checkbox"]')) {
                        field.prop('checked', false);
                        field.filter(`[value="${value}"]`).prop('checked', true);
                    } else {
                        field.val(value);
                    }
                });
            },
        });
    },
});


$(document).ready(() => {
    $('#sylius_admin_order_creation_new_order_shippingAddress').addressBook();
    $('#sylius_admin_order_creation_new_order_billingAddress').addressBook();
});
