import React from 'react';
import { mount } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Bookmarks from '../Bookmarks';

const renderer = new ReactShallowRenderer();

const getProps = () => ({
  getBookmarks: jest.fn(),
  repos: [
    {
      id: 123,
      full_name: 'test/mock',
      stargazers_count: 444,
      forks_count: 1,
      html_url: 'http://fake.io'
    },
    {
      id: 456,
      full_name: 'test2/mock2',
      stargazers_count: 4444,
      forks_count: 2,
      html_url: 'http://fake.com'
    },
    {
      id: 789,
      full_name: 'test3/mock3',
      stargazers_count: 44444,
      forks_count: 3,
      html_url: 'http://fake.edu'
    }
  ]
});

describe('Bookmarks component', () => {
  it('renders consistently', () => {
    const props = getProps();
    expect(renderer.render(<Bookmarks {...props}/>)).toMatchSnapshot();
  });
  it('handles clicks on refresh', () => {
    const props = getProps();
    const component = new Bookmarks(props);
    const mockEvent = {
      stopPropagation: jest.fn()
    };
    component.handleRefresh(mockEvent);
    expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
    expect(props.getBookmarks).toHaveBeenCalledTimes(1);
  });
  it('gets bookmarks on mount', () => {
    const props = getProps();
    mount(<Bookmarks {...props}/>);
    expect(props.getBookmarks).toHaveBeenCalledTimes(1);
  });
});