des=int(input())
while des>0:
    g1,g2,g3=map(int,input().split())
    i=2
    while True:
        if g1%i!=0 and g2%i!=0 and g3%i!=0:
            break
        i=i+1
    print(i)
    des=des-1




des=int(input())
while des>0:
    g1,g2=map(int,input().split())
    while g1!=g2:
        if g1>g2:
            g1=g1-g2
        else:
            g2=g2-g1
    print(g1)
    des=des-1
            