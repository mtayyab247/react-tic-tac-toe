import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Square from '../components/Square';

Enzyme.configure({
    adapter: new Adapter()
});

describe("<Square /> test", () => {
    it("Should render game square", () => {
        const row = 0;
        const col = 0;
        const boardStates = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const wrapper = shallow(<Square boardState={boardStates} row={row} col={col} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("should call handleWinner on making choice", () => {
        const row = 0;
        const col = 0;
        const boardStates = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const onSubmitSpy = jest.fn();
        const wrapper = shallow(<Square row={row} col={col} handleWinner={onSubmitSpy} classAttr={"bb br"} boardState={boardStates} />);
        wrapper.find("button").simulate('click');
        expect(onSubmitSpy).toHaveBeenLastCalledWith(0, 0);
    });
});

