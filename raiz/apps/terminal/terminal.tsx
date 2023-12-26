
'use client'
import { useState, useRef, useEffect } from 'react'
import styles from './terminal.module.css'
import Commander from './commands'

interface ITerminalProps {
 width: number;
 height: number;
}

export default function Terminal(props: ITerminalProps) {

  const path: string = "/"
  const prompt: string = `——(refi)-[~${path}] $ `;
  const [countLine, setCountLine] = useState<number>(0);
  const [oldlines, setOldLines] = useState<string>("");
  const [newLine, setNewLines] = useState<string>(prompt);
  const containerRef = useRef<HTMLDivElement>(null);
  const showTextRef = useRef<HTMLTextAreaElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  
  const _style = {
   width: `${props.width}px`,
   height:`${props.height}px`,
  } 
  
  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    const text = event.currentTarget.value;
    
    var cursorPos = event.currentTarget.selectionStart;
    
    if (event.key === 'Backspace' && newLine.length <= prompt.length || cursorPos <= prompt.length)
    {
      event.preventDefault();
    }
    
    if (event.key === 'Enter') {
      event.preventDefault();
      setCountLine(prev => prev+=1);
      setNewLines(prompt);
      const answer = Commander(text.replace(prompt,""));
      
      setOldLines(prev => {
        if(prev) return `${prev}\n${text}${answer ??
         `\n${answer}`
        }`;
        return text;
      });
    }
  }
  
  function handleInput(event: React.FormEvent<HTMLTextAreaElement>) {
    /*const inputType = event.nativeEvent.inputType;
    if (inputType === 'deleteContentBackward' && newLine.length <= prompt.length) {
      return;
    } */
  }
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
   setNewLines(event.target.value);
  }
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
    if (showTextRef.current) {
      showTextRef.current.scrollTop = showTextRef.current.scrollHeight;
    }
  }, [oldlines]);
  
  return (
    <div 
     className={styles.container} 
     style={_style} 
     ref={containerRef}>
      <textarea
        style={{ height: `${countLine * 15}px` }}
        className={styles.showtext}
        ref={showTextRef}
        value={oldlines}>
      </textarea>
      <textarea
        className={styles.textarea}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        onChange={handleChange}
        ref={textRef}
        value={newLine}>
      </textarea>
    </div>
  );
}