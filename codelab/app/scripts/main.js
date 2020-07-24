/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
 (function() {

  let currentButton;

  function handlePlay(event) {
    // Add code for playing sound.
  }

  function save(button) {
    // Add code for saving the behavior of a button.
  }

  function handleSave() {
    document.body.setAttribute('mode', 'edit');
    save(currentButton);
  }

  function enableEditMode() {
    document.body.setAttribute('mode', 'edit');
    document.querySelectorAll('.button').forEach(btn => {
      btn.removeEventListener('click', handlePlay);
      btn.addEventListener('click', enableBlocklyMode);
    });
  }

  function enableMakerMode() {
    document.body.setAttribute('mode', 'maker');
    document.querySelectorAll('.button').forEach(btn => {
      btn.addEventListener('click', handlePlay);
      btn.removeEventListener('click', enableBlocklyMode);
    });
  }

  function enableBlocklyMode(e) {
    document.body.setAttribute('mode', 'blockly');
    currentButton = e.target;
    loadWorkspace(currentButton);
  }
  function loadWorkspace(button) {
    let workspace = Blockly.getMainWorkspace();
    workspace.clear();
    if (button.blocklyXml) {
      Blockly.Xml.domToWorkspace(button.blocklyXml, workspace);
    }
  }
  document.querySelector('#edit').addEventListener('click', enableEditMode);
  document.querySelector('#done').addEventListener('click', enableMakerMode);
  document.querySelector('#save').addEventListener('click', handleSave);

  enableMakerMode();
  Blockly.inject('blockly-div', {
    media: '../../../media/',
    toolbox: document.getElementById('toolbox'),
    toolboxPosition: 'end',
    horizontalLayout: true,
    scrollbars: false
  });
  let xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
button.blocklyXml = xml;
loadWorkspace(event.target);
function handlePlay(event) {
  loadWorkspace(event.target);
  Blockly.JavaScript.addReservedWords('code');
  var code = Blockly.JavaScript.workspaceToCode(
      Blockly.getMainWorkspace());
  code += 'MusicMaker.play();';
  try {
    eval(code);
  } catch (error) {
    console.log(error);
  }
}

})();
