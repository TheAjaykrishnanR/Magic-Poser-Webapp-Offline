// window._emscriptenModule = Module;
// window.ccall = Module.ccall;
// window.cwrap = Module.cwrap;

function initWasmFunctions() {
  window.Module = Module;
  window.wasm = {

    getValue: Module.getValue,  // address, type

    Undo: Module.cwrap(
      'Undo',
      'void',
      []
    )
    , Redo: Module.cwrap(
      'Redo',
      'void',
      []
    )
    , PushFingerHistory: Module.cwrap(
      'PushFingerHistory',
      'void',
      []
    )

    , AddModel: Module.cwrap(
      'AddModel',
      'void',
      ['string']
    )
    , AddProp: Module.cwrap(
      'AddProp',
      'void',
      ['string']
    )
    , Remove: Module.cwrap(
      'Remove',
      'void',
      []
    )
    , ChangeModel: Module.cwrap(
      'ChangeModel',
      'void',
      ['string']
    )
    , ResetPose: Module.cwrap(
      'ResetPose',
      'void',
      []
    )

    , Duplicate: Module.cwrap(
      'Duplicate',
      'void',
      []
    )

    , SetGridLines: Module.cwrap(
      'SetGridLines',
      'void',
      ['number']
    )
    , GetGridLines: Module.cwrap(
      'GetGridLines',
      'number',
      []
    )
    , SetSky: Module.cwrap(
      'SetSky',
      'void',
      ['number']
    )
    , GetSky: Module.cwrap(
      'GetSky',
      'number',
      []
    )
    , SetUnderwear: Module.cwrap(
      'SetUnderwear',
      'void',
      ['number']
    )
    , GetUnderwear: Module.cwrap(
      'GetUnderwear',
      'number',
      []
    )
    , SetPreviewMode: Module.cwrap(
      'SetPreviewMode',
      'void',
      ['number']
    )
    , GetPreviewMode: Module.cwrap(
      'GetPreviewMode',
      'number',
      []
    )

    , Lock: Module.cwrap(
      'Lock',
      'void',
      ['number']
    )
    , GetLocked: Module.cwrap(
      'GetLocked',
      'number',
      []
    )

    , SetScale: Module.cwrap(
      'SetScale',
      'void',
      ['number']
    )
    , GetScale: Module.cwrap(
      'GetScale',
      'number',
      []
    )

    , SetPropScale: Module.cwrap(
      'SetPropScale',
      'void',
      ['number', 'number', 'number']
    )
    , GetPropScale: Module.cwrap(
      'GetPropScale',
      'number', // address to array of 3 float
      []
    )

    
    , SetManipulatorMode: Module.cwrap(
      'SetManipulatorMode',
      'void',
      ['number']
    )
    , GetManipulatorMode: Module.cwrap(
      'GetManipulatorMode',
      'number',
      []
    )

    , SetObjectPos: Module.cwrap(
      'SetObjectPos',
      'void',
      ['number', 'number', 'number']
    )
    , GetObjectPos: Module.cwrap(
      'GetObjectPos',
      'number', // address to array of 3 float
      []
    )

    , GetRotAxes: Module.cwrap(
      'GetRotAxes',
      'void',
      ['number', 'number', 'number']
    )
    , RotateAlongAxis: Module.cwrap(
      'RotateAlongAxis',
      'void',
      ['number', 'number']  // axisIdx, dt
    )


    , ToggleHandMode: Module.cwrap(
      'ToggleHandMode',
      'void',
      ['number']
    )
    , GetFingerMode: Module.cwrap(
      'GetFingerMode',
      'number',
      []
    )
    , GetFingerAmountCurl: Module.cwrap(
      'GetFingerAmountCurl',
      'void',
      ['number', 'number']
    )
    , MoveFinger: Module.cwrap(
      'MoveFinger',
      'void',
      ['number', 'number']
    )
    , ApplyLeftHandPose: Module.cwrap(
      'ApplyLeftHandPose',
      'void',
      ['number']
    )
    , ApplyRightHandPose: Module.cwrap(
      'ApplyRightHandPose',
      'void',
      ['number']
    )
    , ApplyBodyPose: Module.cwrap(
      'ApplyBodyPose',
      'void',
      ['number']
    )

    , SetPerspective: Module.cwrap(
      'SetPerspective',
      'void',
      ['number']
    )
    , GetPerspective: Module.cwrap(
      'GetPerspective',
      'number',
      []
    )
    , FrameSelected: Module.cwrap(
      'FrameSelected',
      'void',
      []
    )
    , SetView: Module.cwrap(
      'SetView',
      'void',
      ['number']
    )
    , SetBrightness: Module.cwrap(
      'SetBrightness',
      'void',
      ['number']
    )
    , GetBrightness: Module.cwrap(
      'GetBrightness',
      'number',
      []
    )
    , SetGIStrength: Module.cwrap(
      'SetGIStrength',
      'void',
      ['number']
    )
    , GetGIStrength: Module.cwrap(
      'GetGIStrength',
      'number',
      []
    )



    , SetMaterialColor: Module.cwrap(
      'SetMaterialColor',
      'void',
      ['number', 'number', 'number']
    )
    , GetMaterialColor: Module.cwrap(
      'GetMaterialColor',
      'number', // address to array of 3 float
      []
    )
    , SetHairMaterialColor: Module.cwrap(
      'SetHairMaterialColor',
      'void',
      ['number', 'number', 'number']
    )
    , GetHairMaterialColor: Module.cwrap(
      'GetHairMaterialColor',
      'number', // address to array of 3 float
      []
    )

    , AddHair: Module.cwrap(
      'AddHair',
      'void',
      ['string']
    )
    , RemoveHair: Module.cwrap(
      'RemoveHair',
      'void',
      []
    )


    , GetSelectedPart: Module.cwrap(
      'GetSelectedPart',
      'number',
      []
    )

    , GetControlDOF: Module.cwrap(
      'GetControlDOF',
      'number',
      []
    )


    , Resize: Module.cwrap(
      'Resize',
      'void',
      ['number', 'number']
    )
  };

  var canvas = document.getElementById("canvas");
  // canvas.onresize = function() {
  window.onresize = function() {
    // window.wasm.Resize(canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.wasm.Resize(window.innerWidth, window.innerHeight);
  };
}

