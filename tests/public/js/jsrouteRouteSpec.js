define(['jsroute'], function (Jsroute) {

    describe('Jsroutes route method', function() {

        it('can generate a url', function () {
            expect(jsroute.route('home')).toBe('/');
        });

        it('can generate a url with named parameters', function () {
            expect(jsroute.route('away', { somewhere : 'foo' })).toBe('/away/foo');
            expect(jsroute.route('exotic', { somewhere : 'foo', exotic : 'bar' })).toBe('/away/foo/very/bar');
        });

        it('can generate a url with extra parameters as a query string', function () {
            expect(jsroute.route('away', { somewhere : 'foo', bat : 'baz' })).toBe('/away/foo?bat=baz');
        });

    });

});
