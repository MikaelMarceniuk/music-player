import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  title: string;
  artist: string;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
}

export default function MiniPlayer({ title, artist, isPlaying, onPlayPause, onNext }: Props) {
  return (
    <View className="mx-3 mb-1 flex-row items-center gap-3 rounded-2xl bg-[#1a1a1a] px-4 py-3">
      {/* Thumbnail */}
      <View className="h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#252525]">
        <Ionicons name="musical-notes" size={20} color="#4fc3f7" />
      </View>

      {/* Info */}
      <View className="flex-1">
        <Text className="text-sm font-semibold text-white" numberOfLines={1}>
          {title}
        </Text>
        <Text className="mt-0.5 text-xs text-[#888]" numberOfLines={1}>
          {artist}
        </Text>
      </View>

      {/* Controls */}
      <TouchableOpacity
        onPress={onPlayPause}
        className="h-10 w-10 items-center justify-center rounded-full bg-[#4fc3f7]">
        <Ionicons name={isPlaying ? 'pause' : 'play'} size={18} color="#111" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onNext} className="p-1">
        <Ionicons name="play-skip-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
