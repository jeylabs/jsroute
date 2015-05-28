define(['jsroute'], function (Jsroute) {

    describe('Jsroutes link_to method', function () {

        it('can generate an html link to a url', function () {
            expect(jsroute.link_to('foo/bar')).toBe('<a href="/foo/bar" >/foo/bar</a>');
        })

        it('can generate a titled html link to a url', function () {
            expect(jsroute.link_to('foo/bar', 'Foo')).toBe('<a href="/foo/bar" >Foo</a>');
        });

        it('can generate an html link to a url with attributes', function () {
            expect(jsroute.link_to('foo/bar', 'Foo', { style : 'color:#bada55;' })).toBe('<a href="/foo/bar" style="color:#bada55;">Foo</a>')
        });
    });

});
