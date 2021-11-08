import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Board from '../components/Board';

Enzyme.configure({
    adapter: new Adapter()
});

describe("<Board /> test", () => {
    it("Should render game board and squares", () => {
        const wrapper = shallow(<Board />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
