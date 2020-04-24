/**
 * @format
 */

import 'react-native';
import React from 'react';
import Jest from '../App';

import renderer from 'react-test-renderer';

describe('~Jest~', () => {
  const component = renderer.create(<Jest />).getInstance();

  describe('Rendering', () => {
    component.onChangeUser('helo@gmail.com');
    component.onChangePass('12345678');
    it('username is email form', () => {
      const reg = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
      expect(reg.test(component.state.user)).toBeTruthy();
    });
    it('login is phone number', () => {
      const number = /^[0-9]/;
      expect(number.test(component.state.user)).toBeTruthy();
    });
    it('pass length less than 10', () => {
      expect(component.state.pass.trim().length).toBeLessThan(10);
    });
    it('Hide password Input', () => {
      expect(component.state.hide).toBeTruthy();
    });
  });
  describe('Onpress', () => {
    it('Login with User and pass input', () => {
      component.onPressHandler();
      expect(component.state.user && component.state.pass).toBeTruthy();
    });
  });
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
