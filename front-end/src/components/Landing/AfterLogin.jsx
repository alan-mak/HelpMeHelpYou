import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import Button from '../Button';

export default function AfterLogin() {
  // const { mode } = useVisualMode()
  return (
    <div id="afterlogin">
    <Button message="I can Help!" />
    <Button message="I need Help!" />
    </div>
  )
}