import java.util.List;

public class CosNode extends UnaryNode {


    public CosNode(Node parent, String name, List<Node> children) {
        super(parent, name, children);
    }

    @Override
    public String toString() {
        return "cos(" + children.get(0).toString() + ")";
    }

    @Override
    public Double eval(Double x) {
        return Math.cos(children.get(0).eval(x));
    }
}
