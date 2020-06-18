import { UnavailabilityError, Platform } from '@unimodules/core';

import NotificationCategoriesModule from './NotificationCategoriesModule';
import { NotificationAction } from './Notifications.types';

export default async function setNotificationCategoryAsync(
  name: string,
  actions: NotificationAction[],
  previewPlaceholder?: string
): Promise<void> {
  if (!NotificationCategoriesModule.setNotificationCategoryAsync) {
    throw new UnavailabilityError('Notifications', 'setNotificationCategoryAsync');
  }

  return Platform.OS === 'ios'
    ? await NotificationCategoriesModule.setNotificationCategoryAsync(
        name,
        actions,
        previewPlaceholder
      )
    : await NotificationCategoriesModule.setNotificationCategoryAsync(name, actions);
}
