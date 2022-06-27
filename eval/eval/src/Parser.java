import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

public class Parser {
    private Lexer lexer;

    public Parser(Lexer lexer) {
        this.lexer = lexer;
    }

    public Node parsePrimary(Node parent) {
        String token = lexer.next();
        if (token != null) {
            if (token.equals("cos")) {
                Node node = new CosNode(parent, "cos", new ArrayList<>(1));

                if (parent != null) {
                    List<Node> children = parent.getChildren();
                    children.add(node);
                }
                token = lexer.next();
                if (!Objects.equals(token, "(")) {
                    throw new RuntimeException("expected token (");
                }
                parsePrimary(node);
                token = lexer.next();
                if (!Objects.equals(token, ")")) {
                    throw new RuntimeException("expected token )");
                }
                return node;
            }
            if (token.equals("sin")) {
                Node node = new SinNode(parent, "sin", new ArrayList<>(1));

                if (parent != null) {
                    List<Node> children = parent.getChildren();
                    children.add(node);
                }

                token = lexer.next();
                if (!Objects.equals(token, "(")) {
                    throw new RuntimeException("expected token (");
                }
                parsePrimary(node);
                token = lexer.next();
                if (!Objects.equals(token, ")")) {
                    throw new RuntimeException("expected token )");
                }
                return node;
            }

            if (token.equals("abs")) {
                Node node = new AbsNode(parent, "abs", new ArrayList<>(1));

                if (parent != null) {
                    List<Node> children = parent.getChildren();
                    children.add(node);
                }

                token = lexer.next();
                if (!Objects.equals(token, "(")) {
                    throw new RuntimeException("expected token (");
                }
                parsePrimary(node);
                token = lexer.next();
                if (!Objects.equals(token, ")")) {
                    throw new RuntimeException("expected token )");
                }
                return node;
            }

            if (token.equals("tan")) {
                Node node = new TanNode(parent, "tan", new ArrayList<>(1));

                if (parent != null) {
                    List<Node> children = parent.getChildren();
                    children.add(node);
                }

                token = lexer.next();
                if (!Objects.equals(token, "(")) {
                    throw new RuntimeException("expected token (");
                }
                parsePrimary(node);
                token = lexer.next();
                if (!Objects.equals(token, ")")) {
                    throw new RuntimeException("expected token )");
                }
                return node;
            }

            if (token.equals("log")) {
                Node node = new LogNode(parent, "log", new ArrayList<>(1));

                if (parent != null) {
                    List<Node> children = parent.getChildren();
                    children.add(node);
                }

                token = lexer.next();
                if (!Objects.equals(token, "(")) {
                    throw new RuntimeException("expected token (");
                }
                parsePrimary(node);
                token = lexer.next();
                if (!Objects.equals(token, ")")) {
                    throw new RuntimeException("expected token )");
                }
                return node;
            }

            if (token.equals("x")) {
                Node node = new XNode(parent);
                if (parent != null) {
                    List<Node> children = parent.getChildren();
                    children.add(node);
                }
                return node;
            } else if ("()".contains(token)) {
                token = lexer.next();
                parseNode(parent);
            } else {
                Double constant = null;
                try {
                    constant = Double.parseDouble(token);
                } catch (Exception e) {
                    throw new RuntimeException("expected constant but token :" + token);
                }
                token = lexer.next();


                if (Objects.equals(token, "x")) {
                    BXNode node = new BXNode(parent, constant);
                    if (parent != null) {
                        List<Node> children = parent.getChildren();
                        children.add(node);
                    }
                    return node;
                } else {
                    Node constantNode = new ConstantNode(parent, constant);
                    if (parent != null) {
                        List<Node> children = parent.getChildren();
                        children.add(constantNode);
                    }
                    lexer.revert(token);
                    return constantNode;
                }


            }
        }
        return null;
    }


    public Node parseNode(Node parent) {
        Node node = parsePrimary(parent);
        String nextToken = lexer.next();
        while (nextToken != null && Objects.equals(nextToken, "+")) {
            Node right = parsePrimary(parent);
            node = new AddNode(node, right);
            nextToken = lexer.next();
        }
        return node;
    }


    public static void main(String[] args) {
        List<String> s = Arrays.asList("1+2x+cos(sin(abs(x)))", "1", "2x", "abs(x)", "log(x)");
        for (String expression : s) {

            Lexer lexer = new Lexer(expression);
            Parser parser = new Parser(lexer);
            Node node = parser.parseNode(null);
            System.out.println("src:= " + expression + ", result: " + node.eval(Math.PI));
        }

    }


}
