import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import WardrobeGrid from '@/components/wardrobe-grid';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function WardrobeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          
          {/* Header */}
          <View style={styles.header}>
            <ThemedText type="title" style={styles.title}>
              My Wardrobe
            </ThemedText>
            <ThemedText type="default" style={styles.subtitle}>
              Organize and style your fashion
            </ThemedText>
          </View>

          {/* Quick Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <ThemedText type="title" style={styles.statValue}>
                24
              </ThemedText>
              <ThemedText type="small" style={styles.statLabel}>
                Items
              </ThemedText>
            </View>
            <View style={styles.statCard}>
              <ThemedText type="title" style={styles.statValue}>
                5
              </ThemedText>
              <ThemedText type="small" style={styles.statLabel}>
                Outfits
              </ThemedText>
            </View>
            <View style={styles.statCard}>
              <ThemedText type="title" style={styles.statValue}>
                3
              </ThemedText>
              <ThemedText type="small" style={styles.statLabel}>
                Favorites
              </ThemedText>
            </View>
          </View>

          {/* Wardrobe Grid */}
          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              All Items
            </ThemedText>
          </View>
          <WardrobeGrid />
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: BottomTabInset + Spacing.four,
    paddingHorizontal: Platform.select({
      web: Spacing.three,
      default: Spacing.three,
    }),
    maxWidth: Platform.select({
      web: MaxContentWidth,
      default: undefined,
    }),
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    marginBottom: Spacing.four,
    marginTop: Spacing.three,
  },
  title: {
    marginBottom: Spacing.one,
  },
  subtitle: {
    opacity: 0.7,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.four,
    gap: Spacing.two,
  },
  statCard: {
    flex: 1,
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.two,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    // background color is set via ThemedView
  },
  statValue: {
    fontSize: 28,
  },
  statLabel: {
    marginTop: Spacing.half,
    opacity: 0.7,
  },
  sectionHeader: {
    marginBottom: Spacing.three,
    marginTop: Spacing.two,
  },
  sectionTitle: {
    fontSize: 18,
  },
});
