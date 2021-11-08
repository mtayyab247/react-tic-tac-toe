import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Footer from '../components/Footer';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({
    adapter: new Adapter()
});

describe("<Footer /> test", () => {
    it("should render Restart and Result", () => {
        const wrapper = shallow(<Footer />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


