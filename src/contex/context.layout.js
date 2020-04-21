import React, { Component, createContext } from 'react';

export const LayoutProvider = createContext({
  msg: false,
  msgComponent: ''
});
