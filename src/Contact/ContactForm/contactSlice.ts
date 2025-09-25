import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { sendContact } from "../../store/formThunks";

export type ContactFormData = {
	userName: string;
	userEmail: string;
	userPhone: string;
	txtArea?: string;
	creatingGarden: boolean;
	landscaping: boolean;
	cleaning: boolean;
	cutting: boolean;
};

type ContactState = ContactFormData & {
	status: "idle" | "pending" | "success" | "error";
	error?: string;
};

const initialState: ContactState = {
	userName: "",
	userEmail: "",
	userPhone: "",
	txtArea: "",
	creatingGarden: false,
	landscaping: false,
	cleaning: false,
	cutting: false,
	status: "idle",
	error: undefined,
};

const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {
		setField: <K extends keyof ContactFormData>(
			state: ContactState,
			// give me value from ContactFormData under name K(userName/or something else -> this focused input)
			action: PayloadAction<{ field: K; value: ContactFormData[K] }>
		) => {
			(state as ContactFormData)[action.payload.field] = action.payload.value;
		},
		resetForm: () => initialState,
	},

	//   backend actions - reaction state-s thunk sendContact
	extraReducers: (builder) => {
		builder
			.addCase(sendContact.pending, (state) => {
				state.status = "pending";
				state.error = undefined;
			})
			.addCase(sendContact.fulfilled, (state) => {
				state.status = "success";
			})
			.addCase(sendContact.rejected, (state, action) => {
				state.status = "error";
				state.error = (action.payload as string) || "Błąd wysyłki";
			});
	},
});

export const { setField, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
