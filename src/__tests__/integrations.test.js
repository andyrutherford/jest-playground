import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

//Trick axios using moxios
beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
    });
});

afterEach(() => {
    moxios.uninstall();
});

//  1.  Render entire app
//  2.  find the fetchComments button and click it
//  3.  Expect to find a list of comments
it('can fetch a list of comments and display them', () => {
    const wrapper = mount(
        <Root>
            <App />
        </Root>
    );

    wrapper.find('.fetch-comments').simulate('click');

    expect(wrapper.find('li').length).toEqual(2);
}); 