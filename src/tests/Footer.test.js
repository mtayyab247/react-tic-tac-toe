import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Footer from '../components/Footer';
import Restart from '../components/Restart';
import GameResult from '../components/GameResult';

Enzyme.configure({
    adapter: new Adapter()
});

describe("<Footer /> test", () => {
    it("Should render Restart and Result", () => {
        const wrapper = shallow(<Footer />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("Should render Restart", () => {
        const wrapper = shallow(<Restart />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("Should render Result", () => {
        const wrapper = shallow(<GameResult />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


