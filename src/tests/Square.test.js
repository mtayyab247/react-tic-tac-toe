import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
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

    it("should call handleWinner method", () => {
        const row = 0;
        const col = 0;
        const classAttr = "bb";
        const handleWinner = jest.fn();
        const boardStates = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        const wrapper = mount(<Square row={row} col={col} handleWinner={handleWinner} classAttr={classAttr} boardState={boardStates} />);
        wrapper.find('button').simulate('click');
        expect(handleWinner.mock.calls.length).toBe(1);
    });

    it("should show have row and col attribute", () => {
        const row = 0;
        const col = 0;
        const classAttr = "bb";
        const onSubmitSpy = jest.fn();
        const boardStates = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        const wrapper = mount(<Square row={row} col={col} handleWinner={onSubmitSpy} classAttr={classAttr} boardState={boardStates} />);
        const rowVal = wrapper.find("button").props().row;
        const colVal = wrapper.find("button").props().col;
        expect(rowVal).toEqual(0);
        expect(colVal).toEqual(0);
    });

    it("should show have row and col attribute", () => {
        const row = 0;
        const col = 0;
        const classAttr = "bb";
        const onSubmitSpy = jest.fn();
        const boardStates = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        const wrapper = mount(<Square row={row} col={col} handleWinner={onSubmitSpy} classAttr={classAttr} boardState={boardStates} />);
        const rowVal = wrapper.find("button").props().row;
        const colVal = wrapper.find("button").props().col;
        expect(rowVal).toEqual(0);
        expect(colVal).toEqual(0);
    });
});

