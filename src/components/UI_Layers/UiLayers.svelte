<script>
   export let is3D = false

   function toggle3d(event) {
      event.stopPropagation()
      is3D = !is3D
   }
</script>

<ui-root class="UiLayers" class:and--iso={is3D}>
  <ui-layer class="layer __notifications">
    <div class="notification"> new message*</div>
  </ui-layer>
  
  <ui-layer class="layer __page">
    <div class="page">
      <!--lyric credits: Heaven Shall Burn - Black Tears -->
      This fluid on my cheek<br/>
      It drains me, I get weak<br/>
      My heart is cold and bleak<br/>
      Black blood, black tears<br/>
      Black tears, black tears<br/>
      Black
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
    </div>
  </ui-layer>
  
  <ui-layer class="layer __actions">
    <div>
      <div>
        ACTIONS
      </div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  </ui-layer>
  
  <ui-layer class="layer __dialogs -+-active">
    <div class="dialog">
      DIALOG
      <button on:click={toggle3d}>
        toggle 3D
      </button>
    </div>
  </ui-layer>
</ui-root>

<style>
  ui-root,
  ui-layer {
    display: block;
  }

  button {
    cursor: pointer;
  }

  .UiLayers {
    --bgColor: rebeccapurple;
    --actions-height: 3em;
    --size: 222px;
    /*--size: 50%; /*try me*/

    margin: 1em;
    width: var(--size);
    height: var(--size);
    position: relative;
    box-shadow: 0 0 0 1px inset;
    background: var(--bgColor);
    color: white;

    /* for the perspective demo */
    transform-style: preserve-3d;
    transition: transform 1s;
  }

  /* for the perspective demo */
  .UiLayers.and--iso {
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateZ(-45deg);
  }
  .UiLayers.and--iso .layer {
    box-shadow: -2px 2px 1px cyan, 0 0 1px 1px cyan inset;
  }

  ui-layer {
    --elevation: 1;
    transform: translate3d(0, 0, calc(40px * var(--elevation)));
  }
  ui-layer:nth-child(2) {
    --elevation: 2;
  }
  ui-layer:nth-child(3) {
    --elevation: 3;
  }
  ui-layer:nth-child(4) {
    --elevation: 4;
  }

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    /* for the perspective demo */
    transition: transform 1s;
  }
  
  .layer.__notifications {
    z-index: 40;
    width: auto;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .notification {
    margin: .3em;
    padding: .3em;
    color: var(--bgColor);
    background: #eee;
    border: 2px solid
  }
  
  .layer.__page {
    overflow: hidden;
  }
  
  .page {
    position: absolute;
    top: 1em;
    bottom: var(--actions-height);
    width: 100%;
    overflow: auto;
    padding: 1em;
  }

  .layer.__actions {
    height: var(--actions-height);
    top: inherit;
    bottom: 0;
    background: var(--bgColor);
  }
  
  .layer.__dialogs {
    background: rgba(0,0,0,.5);
  }

  .dialog {
    background: var(--bgColor);
    width: 90%;
    padding: 1em;
    border-radius: .2em;
  }
</style>