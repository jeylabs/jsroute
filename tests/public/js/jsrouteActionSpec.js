define(['jsroute'], function (Jsroute) {

    describe('Jsroutes action method', function () {

        it('can generate a url', function () {
            expect(jsroute.action('HomeController@index')).toBe('/');
        });

        it('can generate a url with named parameters', function () {
            expect(jsroute.action('AwayController@somewhere', { somewhere : 'foo' })).toBe('/away/foo');
        });

        it('can generate a url with named parameters as a query string', function () {
            expect(jsroute.action('AwayController@somewhere', { somewhere : 'foo', bat : 'baz' })).toBe('/away/foo?bat=baz');
        });

    });

});
