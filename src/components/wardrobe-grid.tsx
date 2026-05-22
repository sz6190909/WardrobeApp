import { Image, Platform, StyleSheet, View } from 'react-native';
import { useColorScheme } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors, Spacing } from '@/constants/theme';

interface WardrobeItem {
  id: string;
  name: string;
  category: string;
  color: string;
  imageUri: string;
}

// Sample wardrobe data with placeholder image URLs
const SAMPLE_ITEMS: WardrobeItem[] = [
  {
    id: '1',
    name: 'Classic Blue Shirt',
    category: 'Tops',
    color: 'Blue',
    imageUri: 'https://images.unsplash.com/photo-1596521782914-a2fb06ad1642?w=300&h=300&fit=crop',
  },
  {
    id: '2',
    name: 'White T-Shirt',
    category: 'Tops',
    color: 'White',
    imageUri: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
  },
  {
    id: '3',
    name: 'Black Jeans',
    category: 'Bottoms',
    color: 'Black',
    imageUri: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=300&fit=crop',
  },
  {
    id: '4',
    name: 'Denim Jacket',
    category: 'Outerwear',
    color: 'Blue',
    imageUri: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=300&h=300&fit=crop',
  },
  {
    id: '5',
    name: 'Red Sweater',
    category: 'Tops',
    color: 'Red',
    imageUri: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop',
  },
  {
    id: '6',
    name: 'Leather Boots',
    category: 'Shoes',
    color: 'Black',
    imageUri: 'https://images.unsplash.com/photo-1548062166-b9716d04e78f?w=300&h=300&fit=crop',
  },
  {
    id: '7',
    name: 'Floral Dress',
    category: 'Dresses',
    color: 'Multi',
    imageUri: 'https://images.unsplash.com/photo-1515258819976-9f418af7fa51?w=300&h=300&fit=crop',
  },
  {
    id: '8',
    name: 'Khaki Pants',
    category: 'Bottoms',
    color: 'Beige',
    imageUri: 'https://images.unsplash.com/photo-1473966895726-fff5440cd67c?w=300&h=300&fit=crop',
  },
];

export default function WardrobeGrid() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View>
      <View style={styles.grid}>
        {SAMPLE_ITEMS.map((item) => (
          <WardrobeItemCard key={item.id} item={item} isDark={isDark} />
        ))}
      </View>
    </View>
  );
}

interface ItemCardProps {
  item: WardrobeItem;
  isDark: boolean;
}

function WardrobeItemCard({ item, isDark }: ItemCardProps) {
  return (
    <ThemedView style={[styles.itemCard, styles.cardBackground]}>
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.imageUri }}
          style={styles.itemImage}
          defaultSource={require('@/assets/expo.icon/icon.json')}
        />
        {/* Category Badge */}
        <View style={[styles.badge, styles.categoryBadge]}>
          <ThemedText type="small" style={styles.badgeText}>
            {item.category}
          </ThemedText>
        </View>
      </View>

      {/* Item Info */}
      <View style={styles.itemInfo}>
        <ThemedText type="default" style={styles.itemName} numberOfLines={1}>
          {item.name}
        </ThemedText>
        <View style={styles.colorRow}>
          <View
            style={[
              styles.colorIndicator,
              {
                backgroundColor: getColorValue(item.color),
              },
            ]}
          />
          <ThemedText type="small" style={styles.colorText}>
            {item.color}
          </ThemedText>
        </View>
      </View>

      {/* Action Button */}
      <View style={styles.actionButton}>
        <ThemedText type="small" style={styles.actionText}>
          ♡
        </ThemedText>
      </View>
    </ThemedView>
  );
}

function getColorValue(colorName: string): string {
  const colorMap: Record<string, string> = {
    Blue: '#0066CC',
    White: '#FFFFFF',
    Black: '#000000',
    Red: '#FF3B30',
    Beige: '#D4A574',
    Multi: '#FF1493',
  };
  return colorMap[colorName] || '#999999';
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -Spacing.one,
    marginBottom: Spacing.four,
  },
  itemCard: {
    width: Platform.select({
      web: '23.5%',
      default: '48%',
    }),
    marginHorizontal: Spacing.one,
    marginBottom: Spacing.three,
    borderRadius: 12,
    overflow: 'hidden',
    paddingBottom: Spacing.two,
  },
  cardBackground: {
    backgroundColor: '#f5f5f5', // Will be overridden by ThemedView
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1,
    marginBottom: Spacing.two,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  badge: {
    position: 'absolute',
    top: Spacing.two,
    right: Spacing.two,
    paddingHorizontal: Spacing.one,
    paddingVertical: Spacing.half,
    borderRadius: 6,
  },
  categoryBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
  },
  itemInfo: {
    paddingHorizontal: Spacing.two,
  },
  itemName: {
    fontWeight: '600',
    marginBottom: Spacing.one,
  },
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  colorIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  colorText: {
    opacity: 0.7,
  },
  actionButton: {
    position: 'absolute',
    top: Spacing.two,
    left: Spacing.two,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 18,
  },
});
