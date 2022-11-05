import React from 'react'

function DemoList() {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default React.memo(DemoList)//только компоненттерге иштетсек
