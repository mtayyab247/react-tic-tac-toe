import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Tictactoe from '../components/Tictactoe';

Enzyme.configure({
    adapter: new Adapter()
});

describe("<Tictactoe /> test", () => {
    it("Should render Tictactoe", () => {
        const wrapper = shallow(<Tictactoe />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


