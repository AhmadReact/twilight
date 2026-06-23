import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/lib/axios';

export type ApiResponse<T> = {
  success: boolean;
  status: number;
  message: string;
  data: T;
};

export type UserTypeKey = 'buyer' | 'pro_seller' | 'team_lead' | 'team_worker';

export type UserStatusKey = 'active' | 'blocked' | 'inactive';

export type GetUsersParams = {
  search?: string;
  user_type?: UserTypeKey | string;
  status?: UserStatusKey | string;
  page?: number;
  limit?: number;
};

export type AdminUser = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  avatar_url: string | null;
  user_type: string;
  user_type_key: UserTypeKey | string;
  total_bookings: number;
  completed_bookings: number;
  cancelled_bookings: number;
  member_since: string;
  created_at: string;
  status: string;
  status_key: UserStatusKey | string;
};

export type UsersPagination = {
  page: number;
  limit: number;
  total: number;
  total_pages: number;
};

export type UsersListData = {
  users: AdminUser[];
  pagination: UsersPagination;
};

export type UserDetailProfile = {
  user_id: number;
  profile_image: string | null;
  full_name: string;
  email: string;
  phone_number: string;
  rating: number | null;
  review_count: number;
  status: string;
  status_key: UserStatusKey | string;
  is_pro: boolean;
  user_type: string;
  user_type_key: UserTypeKey | string;
  member_since: string;
  created_at: string;
};

export type UserDetailBookingsSummary = {
  total: number;
  completed: number;
  in_progress: number;
  cancelled: number;
  upcoming: number;
};

export type UserDetailBooking = {
  id: number;
  title: string;
  image_url: string | null;
  provider_name: string;
  provider_type: string;
  provider_type_key: string;
  is_pro: boolean | null;
  price: string;
  price_amount: number;
  date: string;
  time: string;
  scheduled_at: string;
  location_address: string;
  status: string;
};

export type UserDetailLocation = {
  id: number;
  label: string;
  address: string;
  is_selected: boolean;
};

export type UserDetailSavedDevice = {
  device_id: string;
  device_type: string;
  fcm_token: string;
  fcm_token_full: string;
  last_login: string;
  created_at: string;
};

export type UserDetailActiveFavors = {
  current: number;
  total: number;
};

export type UserDetailFavorBookingDetails = {
  title: string;
  price: string;
  price_amount: number;
  date: string;
};

export type UserDetailFavor = {
  id: number;
  booking_details: UserDetailFavorBookingDetails;
  category: string;
  sub_categories: string[];
  status: string;
  status_key: string;
};

export type UserDetailData = {
  profile: UserDetailProfile;
  bookings_summary: UserDetailBookingsSummary;
  bookings_in_progress: UserDetailBooking[];
  upcoming_bookings: UserDetailBooking[];
  locations: UserDetailLocation[];
  saved_devices: UserDetailSavedDevice[];
  total_earnings: number;
  active_favors: UserDetailActiveFavors;
  favors: UserDetailFavor[];
};

export type SellerFavor = {
  id: number;
  title?: string;
  status?: string;
  price?: number | string;
  created_at?: string;
  [key: string]: unknown;
};

export type SellerFavorsData = {
  favors: SellerFavor[];
  total?: number;
  page?: number;
  limit?: number;
};

export type CreateUserPayload = {
  full_name: string;
  email: string;
  phone_country_code: string;
  phone_number: string;
  password: string;
  role: 'buyer' | 'pro_seller';
};

export type SendEmailPayload = {
  subject: string;
  message: string;
};

export type SendNotificationPayload = {
  title: string;
  description: string;
  key: string;
};

export type GetSellerFavorsParams = {
  userId: string | number;
  page?: number;
  limit?: number;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['User', 'SellerFavor'],
  endpoints: (builder) => ({
    getUsers: builder.query<ApiResponse<UsersListData>, GetUsersParams | void>({
      query: (params) => ({
        url: '/admin/users',
        params: params ?? undefined,
      }),
      providesTags: (result) =>
        result?.data?.users
          ? [
              ...result.data.users.map(({ id }) => ({ type: 'User' as const, id: String(id) })),
              { type: 'User', id: 'LIST' },
            ]
          : [{ type: 'User', id: 'LIST' }],
    }),

    getUserDetail: builder.query<ApiResponse<UserDetailData>, string | number>({
      query: (userId) => ({
        url: `/admin/users/${userId}`,
      }),
      providesTags: (_result, _error, userId) => [{ type: 'User', id: String(userId) }],
    }),

    getSellerFavors: builder.query<ApiResponse<SellerFavorsData>, GetSellerFavorsParams>({
      query: ({ userId, ...params }) => ({
        url: `/admin/users/${userId}/favors`,
        params,
      }),
      providesTags: (_result, _error, { userId }) => [
        { type: 'SellerFavor', id: String(userId) },
      ],
    }),

    createUser: builder.mutation<ApiResponse<AdminUser>, CreateUserPayload>({
      query: (body) => ({
        url: '/admin/users',
        method: 'POST',
        data: body,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),

    blockUser: builder.mutation<ApiResponse<AdminUser>, string | number>({
      query: (userId) => ({
        url: `/admin/users/${userId}/status`,
        method: 'PATCH',
        data: { action: 'block' },
      }),
      invalidatesTags: (_result, _error, userId) => [
        { type: 'User', id: String(userId) },
        { type: 'User', id: 'LIST' },
      ],
    }),

    unblockUser: builder.mutation<ApiResponse<AdminUser>, string | number>({
      query: (userId) => ({
        url: `/admin/users/${userId}/status`,
        method: 'PATCH',
        data: { action: 'unblock' },
      }),
      invalidatesTags: (_result, _error, userId) => [
        { type: 'User', id: String(userId) },
        { type: 'User', id: 'LIST' },
      ],
    }),

    sendEmail: builder.mutation<
      ApiResponse<unknown>,
      { userId: string | number; body: SendEmailPayload }
    >({
      query: ({ userId, body }) => ({
        url: `/admin/users/${userId}/send-email`,
        method: 'POST',
        data: body,
      }),
    }),

    sendNotification: builder.mutation<
      ApiResponse<unknown>,
      { userId: string | number; body: SendNotificationPayload }
    >({
      query: ({ userId, body }) => ({
        url: `/admin/users/${userId}/send-notification`,
        method: 'POST',
        data: body,
      }),
    }),

    clearDeviceId: builder.mutation<ApiResponse<unknown>, string | number>({
      query: (userId) => ({
        url: `/admin/users/${userId}/clear-device`,
        method: 'POST',
      }),
      invalidatesTags: (_result, _error, userId) => [{ type: 'User', id: String(userId) }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserDetailQuery,
  useGetSellerFavorsQuery,
  useCreateUserMutation,
  useBlockUserMutation,
  useUnblockUserMutation,
  useSendEmailMutation,
  useSendNotificationMutation,
  useClearDeviceIdMutation,
} = userApi;
