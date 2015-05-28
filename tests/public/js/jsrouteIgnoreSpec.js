define(['jsroute'], function (Jsroute) {

    describe('Jsroutes generate:jsroute', function () {

        it('can ignore routes', function () {
            expect(jsroute.route('ignored')).not.toBe('/ignored');
            expect(jsroute.route('ignored')).toBe(undefined);
        });

        it('can ignore groups of routes', function () {
            expect(jsroute.route('group.ignored')).not.toBe('/ignored');
            expect(jsroute.route('group.ignored')).toBe(undefined);
        });

    });

});
