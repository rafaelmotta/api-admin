let service = (Restangular, ApiBase) => {
  return new class AddonApi extends ApiBase {

    create(addonCategory, addon) {
      return Restangular
        .one('companies', this.company.id)
        .one('addon_categories', addonCategory.id)
        .post('addons', { addon: addon });
    }

    update(addonCategory, addon) {
      return Restangular
        .one('companies', this.company.id)
        .one('addon_categories', addonCategory.id)
        .one('addons', addon.id)
        .patch({ addon: addon })
    }

    destroy(addonCategory, addon) {
      return Restangular
        .one('companies', this.company.id)
        .one('addon_categories', addonCategory.id)
        .one('addons', addon.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('addonApi', service);