import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Square from '../components/Square';
import Restart from '../components/Restart';

Enzyme.configure({
    adapter: new Adapter()
});

it("should show restart button", () => {
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
    const buttonWrapper = mount(<Restart />);
    wrapper.find('button').simulate('click');
    buttonWrapper.update();
    wrapper.update();
    expect(buttonWrapper.contains(<button class="show restart">Restart</button>)).toBe(true);
});