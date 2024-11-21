import { render, unmountComponentAtNode } from 'react-dom'
import React from 'react'
import expect from 'expect'
import assert from 'assert';
import Link from '../components/Link';

describe('Link', function () {

  let node
  beforeEach(function () {
    node = document.createElement('div')
  })

  afterEach(function () {
    unmountComponentAtNode(node)
  })

  it('renders only one component', function (done) {

    var component = <Link to="test1" spy={true} smooth={true} duration={500}>Test 1</Link>;

    render(component, node, function () {
      expect(node.textContent).toEqual('Test 1');
      done();
    });

  })

  it('renders two components', function (done) {

    var component = <div>
      <Link to="test1" spy={true} smooth={true} duration={500}>A</Link>;
                        <Link to="test1" spy={true} smooth={true} duration={500}>B</Link>;
                    </div>

    render(component, node, function () {
      expect(node.textContent).toEqual('A;B;');
      done();
    });

  })
  it('renders two components with hash replaced', function (done) {

    var component = <div>
                         <Link to="test1" spy={true} smooth={true} hashSpy={true} saveHashHistory={false} duration={500}>A</Link>;
                        <Link to="test1" spy={true} smooth={true} saveHashHistory={false} duration={500}>B</Link>;
                    </div>

    render(component, node, function () {
      expect(node.textContent).toEqual('A;B;');
      done();
    });

  })

});