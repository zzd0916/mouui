import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './button'

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'custom'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps} >Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    // 模拟点击事件
    fireEvent.click(element);
    // 检测事件是否触发
    expect(defaultProps.onClick).toHaveBeenCalled();
  })
  it('should render the correct component base on different props', () => {
    const wrapper = render(<Button {...testProps} >Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-primary btn-lg custom');
  })
  it('should render a link when btnType equals link and href  is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="http://www.baidu.com">Link</Button>);
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps} >Disabled</Button>);
    const element = wrapper.getByText('Disabled') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element.disabled).toBeTruthy(); 
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  })
})