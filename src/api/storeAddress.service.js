let service = (Restangular, ApiBase) => {

  return new class StoreAddressApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('adddress')
        .get();
    }

    update(storeAddress) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('adddress', storeAddress.id)
        .patch({ address: storeAddress });
    }
  }
};

angular.module('foodbox.admin.api').factory('storeAddressApi', service);
