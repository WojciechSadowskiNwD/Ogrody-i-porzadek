import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendContactApi } from '../api/contactApi';
import type { RootState } from './store';

export const sendContact = createAsyncThunk(
  'contact/sendContact',
  async (_: void, { getState, rejectWithValue }) => {
    const { contact } = getState() as RootState;
    try {
      return await sendContactApi({
        userName: contact.userName,
        userEmail: contact.userEmail,
        userPhone: contact.userPhone,
        txtArea: contact.txtArea,
        creatingGarden: contact.creatingGarden,
        landscaping: contact.landscaping,
        cleaning: contact.cleaning,
        cutting: contact.cutting,
      });
    } catch (e: unknown) {
      if (e instanceof Error) return rejectWithValue(e.message);
      return rejectWithValue('Email send failed');
    }
  }
);