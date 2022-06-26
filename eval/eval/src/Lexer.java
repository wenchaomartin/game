public class Lexer {
    private String src;
    private String tokenBreak = "()+x";

    public Lexer(String src) {
        this.src = src;
    }

    public String next() {
        if (src == null || src.length() == 0) {
            return null;
        }
        if (tokenBreak.contains(src.charAt(0) + "")) {
            char token = src.charAt(0);
            //todo String length is 1 throw error
            this.src = this.src.substring(1);
            return token + "";
        }

        for (int i = 0; i < src.length(); i++) {
            if (tokenBreak.contains(src.charAt(i) + "")) {
                String token = src.substring(0, i);
                this.src = this.src.substring(i);
                return token;
            }
        }
        String token = this.src;
        this.src = "";
        return token;
    }

    public void revert(String token) {
        if (token == null) {
            return;
        }
        src = token + src;

    }

}
