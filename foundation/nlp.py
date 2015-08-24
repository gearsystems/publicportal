import nltk, re, pprint

def ie_preprocess(document):
	sentences = nltk.sent_tokenize(document)
	sentences = [nltk.word_tokenize(sent) for sent in sentences]
	sentences = [nltk.pos_tag(sent) for sent in sentences] 
	return sentences


def getNodes(parent,location_parsed,complaint_parsed):
    for node in parent:
        if type(node) is nltk.Tree:
            if node.label() == "LOC":
                leaves = [tup[0] for tup in node.leaves()]
                location_parsed.append(" ".join(leaves))

            else:
            	getNodes(node)
        else:
            complaint_parsed.append(node[0])
       

def parse(msg):
    complaint_parsed = []
    location_parsed = []
    sentences = ie_preprocess(msg)
    for sentence in sentences:
        comp_grammar = r"""
                LOC: {<IN><DT>?(<NNP>|<NNS>|<,>)+<NN>?}

                         """
        cp = nltk.RegexpParser(comp_grammar)
        cp_result = cp.parse(sentence)
        getNodes(cp_result,location_parsed,complaint_parsed)
        l = []
        if(len(location_parsed)>0):
            l =  location_parsed[0][location_parsed[0].find(' '):]
        c = " ".join(complaint_parsed)
        return l, c



