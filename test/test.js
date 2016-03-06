var InlineSVG = require('../dist');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var assert = require('assert');


describe('<InlineSVG />', function () {
    var rendered;
    var src = "<svg><circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"red\"></circle></svg>";

    before(function () {
        rendered = ReactDOMServer.renderToString(React.createElement(InlineSVG, { src: src }));
    });

    it('should render component correctly with expected output', function () {
        // FIXME
        assert.equal(typeof rendered, 'string');
    });

    it('renders <i /> as default container element', function () {
        assert.equal(rendered.startsWith('<i'), true);
        assert.equal(rendered.endsWith('</i>'), true);
    });

    it('should be able to change container element', function () {
        var withContainerOption = ReactDOMServer.renderToString(
            React.createElement(InlineSVG, { src: src, element: 'span' })
        );
        assert.equal(withContainerOption.startsWith('<span'), true);
        assert.equal(withContainerOption.endsWith('</span>'), true);
    });

    it('should render without any error', function () {
        var rendered = ReactDOMServer.renderToString(React.createElement(InlineSVG, { src: src }));
        assert.equal(typeof rendered, 'string');
    });
});
