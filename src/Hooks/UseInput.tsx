'use client'
import React, { useState } from 'react'

export default function UseInput() {
    const [text, setText] = useState<string>()
    const [value, setvalue] = useState('')
    const handleSubmit = (e:  React.FormEvent) => {
        e.preventDefault();
        setText(value);
        setvalue('');
    };
  return {text, setText, value, setvalue, handleSubmit }
}
