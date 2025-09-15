import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ContactFormData = {
    userName: string;
    userEmail: string;
    userPhone: string;
    creatingGarden: boolean;
    landscaping: boolean;
    cleaning: boolean;
    cutting: boolean;
    txtArea: string;
}

type ContactState = {
    submissions: ContactFormData[];
    lastSubmittedAt?: string;
}

const initialState: ContactState = {
    submissions: [],
    lastSubmittedAt: undefined,
};

const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {
		addSubmission: (state, action: PayloadAction<ContactFormData>) => {
			state.submissions.push(action.payload);
			state.lastSubmittedAt = new Date().toISOString();
		},
        clearSubmissions: (state)=> {
            state.submissions = [];
            state.lastSubmittedAt = undefined;
        }
	},
});

export const { addSubmission , clearSubmissions} = contactSlice.actions;
export default contactSlice.reducer;