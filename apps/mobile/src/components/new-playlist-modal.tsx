import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Switch,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  visible: boolean;
  onClose: () => void;
  onAdd: (data: { name: string; description: string; isPublic: boolean }) => void;
}

export default function NewPlaylistModal({ visible, onClose, onAdd }: Props) {
  const insets = useSafeAreaInsets();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  const canCreate = name.trim().length > 0;

  const handleCreate = () => {
    if (!canCreate) return;
    onAdd({ name: name.trim(), description: description.trim(), isPublic });
    handleClose();
  };

  const handleClose = () => {
    setName('');
    setDescription('');
    setIsPublic(true);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={handleClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        {/* Backdrop */}
        <Pressable onPress={handleClose} className="flex-1 bg-black/60" />

        {/* Sheet */}
        <View style={{ paddingBottom: insets.bottom || 24 }} className="rounded-t-3xl bg-[#1c1c1e]">
          {/* Handle */}
          <View className="mb-1 mt-3 h-1 w-10 self-center rounded-full bg-[#48484a]" />

          {/* Header */}
          <View className="flex-row items-center justify-between border-b border-[#2c2c2e] px-5 py-4">
            <TouchableOpacity
              onPress={handleClose}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <Text className="text-base text-[#4fc3f7]">Cancel</Text>
            </TouchableOpacity>

            <Text className="text-base font-bold text-white">New Playlist</Text>

            <TouchableOpacity
              onPress={handleCreate}
              disabled={!canCreate}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <Text
                className={`text-base font-semibold ${canCreate ? 'text-[#888]' : 'text-[#444]'}`}>
                Create
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            {/* Cover picker */}
            <TouchableOpacity
              activeOpacity={0.7}
              className="mx-auto mb-8 mt-8 h-48 w-48 items-center justify-center rounded-2xl bg-[#2c2c2e]">
              <View className="mb-3 h-14 w-14 items-center justify-center rounded-full bg-[#3a3a3c]">
                <Ionicons name="camera-outline" size={26} color="#ebebf5" />
              </View>
              <Text className="text-xs font-bold tracking-widest text-[#ebebf5]">ADD COVER</Text>
            </TouchableOpacity>

            {/* Playlist name — underline style */}
            <View className="mx-5 mb-6">
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Playlist name"
                placeholderTextColor="#48484a"
                returnKeyType="next"
                style={{
                  color: '#fff',
                  fontSize: 22,
                  fontWeight: '300',
                  paddingBottom: 8,
                  borderBottomWidth: 1.5,
                  borderBottomColor: '#4fc3f7',
                }}
              />
            </View>

            {/* Description — box style */}
            <View className="mx-5 mb-8">
              <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="Description (optional)"
                placeholderTextColor="#48484a]"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                style={{
                  color: '#fff',
                  fontSize: 15,
                  backgroundColor: '#2c2c2e',
                  borderRadius: 10,
                  padding: 14,
                  minHeight: 100,
                  borderWidth: 0.5,
                  borderColor: '#3a3a3c',
                }}
              />
            </View>

            {/* Divider */}
            <View className="mx-5 mb-0 h-px bg-[#2c2c2e]" />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
