export const getContacts = store =>
  store.data.filter(contact =>
    contact.name.toLowerCase().includes(store.filter.toLowerCase())
  );

export const getFilter = store => store.filter;

// export const getContacts = state => state.data.contacts;

// export const getFilter = state => state.filter;
