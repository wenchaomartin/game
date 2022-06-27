import java.util.List;

public class AbsNode extends UnaryNode {


    public AbsNode(Node parent, String name, List<Node> children) {
        super(parent, name, children);
    }


    @Override
    public String toString() {
        return "abs(" + children.get(0).toString() + ")";
    }

    @Override
    public Double eval(Double x) {
        return Math.abs(children.get(0).eval(x));
    }
}
