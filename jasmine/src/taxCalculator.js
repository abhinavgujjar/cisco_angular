var rateProvider = (function() {
	return {
		getRate: function() {
			$http.getRate('localhostL66600').success(function() {
				return rate;
			})
		}
	}
})();

var taxCalculator = (function() {

	return {
		calculate: function(income, rateProvider) {
			var rate = rateProvider.getRate();
			var tax = income * 0.3;

			if (tax < 0) {
				tax = 0
			};

			return tax;
		}
	}

})();