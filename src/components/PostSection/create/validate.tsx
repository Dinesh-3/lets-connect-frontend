const REGEX_PATTERN = {
    content: {
        pattern: /.+/,
        message: (field) => {
            return `${field} is required`;
        }
    }
};

export default REGEX_PATTERN;
