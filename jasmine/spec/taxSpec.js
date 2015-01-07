//test suite
describe('tax calculator specs', function() {

	//unit test
	it('should exists', function() {
		//assertion
		expect(taxCalculator).toBeDefined();
	});

	it('should call get rate', function() {

		var fakeRateProvider = jasmine.createSpyObj('rateProvider', ['getRate']);

		fakeRateProvider.getRate.and.returnValue(0.3);

		var tax = taxCalculator.calculate(1000, fakeRateProvider);
		expect(fakeRateProvider.getRate).toHaveBeenCalled();
	});
it('should calcualte the tax', function() {

		var fakeRateProvider = jasmine.createSpyObj('rateProvider', ['getRate']);

		fakeRateProvider.getRate.and.returnValue(0.3);

		var tax = taxCalculator.calculate(1000, fakeRateProvider);
		expect(tax).toBe(300);
	});

	it('tax should not ever be negative', function() {
		//assertion
		var fakeRateProvider = jasmine.createSpyObj('rateProvider', ['getRate']);

		fakeRateProvider.getRate.and.returnValue(0.3);

		var tax = taxCalculator.calculate(-1000, fakeRateProvider);
		expect(tax).toBe(0);
	});



})