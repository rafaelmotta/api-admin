let service = (Restangular, $rootScope) => {
  return new class AddonApi {

    // GET /admin/companies/:company_id/stores/:store_id/addon_categories/:addon_category_id/addons
    create(addonCategory, addon) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('addon_categories', addonCategory.id)
        .post('addons', { addon: addon });
    }

    // GET /admin/companies/:company_id/stores/:store_id/addon_categories/:addon_category_id/addons/:id
    show(addonCategory, addon) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('addon_categories', addonCategory.id)
        .one('addons', addon.id)
        .get();
    }

    // GET /admin/companies/:company_id/stores/:store_id/addon_categories/:addon_category_id/addons/:id
    update(addonCategory, addon) {
      if(addon.addon_category && addon.addon_category.id) {
        addon.addon_category_id = addon.addon_category.id;
      }

      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('addon_categories', addonCategory.id)
        .one('addons', addon.id)
        .patch({ addon: addon })
    }

    // GET /admin/companies/:company_id/stores/:store_id/addon_categories/:addon_category_id/addons/:id
    destroy(addonCategory, addon) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('addon_categories', addonCategory.id)
        .one('addons', addon.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('addonApi', service);
