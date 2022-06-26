import java.util.List;

/**
 * 一元运算符
 */
public class UnaryNode implements Node {

    protected Node parent;

    protected String name;

    protected List<Node> children;

    public UnaryNode(Node parent, String name, List<Node> children) {
        this.parent = parent;
        this.name = name;
        this.children = children;
    }

    @Override
    public List<Node> getChildren() {
        return children;
    }


    public Double eval(Double x) {
        return children.get(0).eval(x);
    }
}
