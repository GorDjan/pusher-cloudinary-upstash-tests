'use client';
import React from 'react';
import { Button } from './ui/button';
import { MoonIcon, SunIcon, Volume2, VolumeX } from 'lucide-react';
import { useTheme } from 'next-themes';
import { usePreferences } from '../store/usePreferences';
import useSound from 'use-sound';

const PreferencesTab = () => {
  const { setTheme } = useTheme();
  const { soundEnabled, setSoundEnabled } = usePreferences();
  const [playMouseClick] = useSound('/sounds/mouse-click.mp3', {
	 volume: 0.2, soundEnabled 
  });
  const [playSoundOn] = useSound('/sounds/sound-on.mp3', { volume: 0.2 });
  const [playSoundOff] = useSound('/sounds/sound-off.mp3', { volume: 0.2 });

  return (
    <div className="flex flex-wrap gap-2 px-1 md:px-2">
      <Button
        onClick={() => {
          setTheme('light');
          playMouseClick(); 
        }}
        variant={'outline'}
        size={'icon'}
      >
        <SunIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button
        onClick={() => {
          setTheme('dark');
          playMouseClick(); 
        }}
        variant={'outline'}
        size={'icon'}
      >
        <MoonIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button
        onClick={() => {
          setSoundEnabled(!soundEnabled);
          soundEnabled ? playSoundOff() : playSoundOn(); 
        }}
        variant={'outline'}
        size={'icon'}
      >
        {soundEnabled ? (
          <Volume2 className="size-[1.2rem] text-muted-foreground" />
        ) : (
          <VolumeX className="size-[1.2rem] text-muted-foreground" />
        )}
      </Button>
    </div>
  );
};

export default PreferencesTab;
