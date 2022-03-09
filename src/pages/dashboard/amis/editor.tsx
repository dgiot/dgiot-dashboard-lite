import React from 'react';
import {Editor} from 'amis-editor';
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'amis/lib/themes/default.css'
import 'amis-editor/dist/style.css'
export default function editor() {
  // const props = {}
  return (
    // ts-ignore-next-line
    <Editor style={{width: '100%', height: '46vh'}}/>
  );
};