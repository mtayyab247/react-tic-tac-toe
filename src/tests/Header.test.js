import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Header from '../components/Header';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({
    adapter: new Adapter()
});

describe("<Header /> test", () => {
    it("should render title and player name whose turn it is", () => {
        const wrapper = shallow(<Header playerTurn={"Player 1"} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("should not render player turn if playturn prop not passed", () => {
        const wrapper = shallow(<Header />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


