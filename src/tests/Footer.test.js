import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Footer from '../components/Footer';
import Restart from '../components/Restart';
import Result from '../components/Result';

Enzyme.configure({
    adapter: new Adapter()
});

describe("<Footer /> test", () => {
    it("should render Restart and Result", () => {
        const wrapper = shallow(<Footer />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("should render Restart", () => {
        const wrapper = shallow(<Restart />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("should render Result", () => {
        const wrapper = shallow(<Result />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


